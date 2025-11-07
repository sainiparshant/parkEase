import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken';


const generateAccessAndRefreshToken = async(userId) =>{
    try {
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { refreshToken, accessToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while genrating Tokens!");
    }
}


const registerUser = asyncHandler( async (req,res) => {

    const { username, email, password } = req.body;

    if(
        [username, email, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400,"All fields are Required!")
    }

    const existedUser = await User.findOne({email});
    if(existedUser){
        throw new ApiError(409, "User Exist Already!");
    }

    const user = await User.create({
        username,
        email,
        password,
    });

    
   const createdUser  =  await User.findById(user._id).select("-password -refreshToken");
    
   return res
   .status(201)
   .json(
        new ApiResponse(
            201,
            {
                user: createdUser,
            },
            "User Registered Successfully!"
        )
   )
});

const loginUser = asyncHandler(async (req,res) =>{

    const { email, password } = req.body;

    if(!(email || password)){
        throw new ApiError(409, "Email or Password is missing!");
    }

    const user = await User.findOne({email});
    if(!user){
        throw new ApiError("User not Registered Yet!, Register yourself");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if(!isPasswordValid){
        throw new ApiError(401, " Invalid Password Entered!");
    }

    const { accessToken, refreshToken } =await generateAccessAndRefreshToken(user._id);
    if(!refreshToken || !accessToken){
        throw new ApiError(500, "Something went wrong while generating token!");
    }

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly:true,
        secure:true,
    }

    return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            201,
            {
                accessToken, refreshToken, loggedInUser
            },
            "User Login Successfully!"
        )
    )

});

const getUserProfile = asyncHandler (async (req,res) =>{

    return res
    .status(200)
    .json(new ApiResponse(
        200,
        req.user,
        "User Data Fetch Successfully!"
    ))
});


const logoutUser = asyncHandler(async (req,res) =>{
    
    if(!req.user._id){
        throw new ApiResponse(401, "No userId is available!");
    }

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: { refreshToken: null }
        },
        { new:true }
    );

    const options = {
        httpOnly:true,
        secure:true,
    
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(
            200,
            {},
            "User Logged Out Successfully!"
        )
    );

});

// to regenrate the access token
const refreshAccessToken = asyncHandler( async (req,res) =>{
    try {
        const incomingRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken
        if(!incomingRefreshToken){
            throw new ApiError(404, "No token is available")
        }

        const decodedToken = await jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);       

        const user = await User.findById(decodedToken._id);
         if(!user){
            throw new ApiError(401, "Invalid refresh Token")
        }

        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh Token is expired!");
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

        const options ={
            httpOnly:true,
            secure:true
        }

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiError(200,{
                accessToken, refreshToken
            },
            "Access token refresh Succcessfully!"
        ));

    } catch (error) {
        throw new ApiError(404, "Something went wrong while refreshing Access Token!")
    }
});

const changePassword = asyncHandler(async (req,res) => {

    const { oldPassword, newPassword } = req.body;

    if(!oldPassword || !newPassword){
        throw new ApiError(404, "All fields are required!")
    }

   const user = await User.findById(req.user?._id);

   const validPassword = await isPasswordCorrect(oldPassword);
   if(!validPassword){
        throw new ApiError(402, "Your Old password is incorrect!");
   }

   user.password = newPassword;
   await user.save({ validateBeforeSave : true });

   return res
   .status(200)
   .json(new ApiResponse(200, {}, "Password Changed Successfully!"));
});



export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changePassword,
    getUserProfile,
}