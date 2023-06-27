import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"
import { setSearchData, setLoadingSearch } from "../../slices/searchSlice"


const { GET_USER_DETAILS_API,
        GET_ALL_USER_PRESENT_API,
        DELETE_USER_API,
        UPDATE_PROFILE_OF_USER_API,
        UPDATE_PROFILE_PICTURE_API,
        SEARCH_USER_API } = profileEndpoints
export function getUserDetails(token, navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      console.log("121:",response.data.post)
      // const userImage = response.data.post.image
      //   ? response.data.post.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data}))
      console.log("121:",response.data)
      const userImage = response.data.post.image
        ? response.data.post.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({...response.data, image: userImage}));
      toast.dismiss(toastId)
      dispatch(setLoading(false))
      
      return response;
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details");
      throw error;
    }
  }
}

export async function getAllUserPresent(token,navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_ALL_USER_PRESENT_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_ALL_USER_PRESENT_SO_FAR RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export async function deleteUserPermanently(token,navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("DELETE", DELETE_USER_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("User permanently deleted RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("DELETE_USER API ERROR............", error)
      toast.error("Could Not DELETE USER This Time! TRY Again")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export const updateUserProfile = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PUT", UPDATE_PROFILE_OF_USER_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE User Profile section API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update User Profile")
    }
    toast.success("User Profile Updated")
    result = response?.data?.data
  } catch (error) {
    console.log("UPDATE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export function updateProfilePicture(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_PROFILE_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(
        "UPDATE_PROFILE_PICTURE_API API RESPONSE............",
        response
      )

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Display Picture Updated Successfully")
      dispatch(setUser(response.data.data))
    } catch (error) {
      console.log("UPDATE_PROFILE_PICTURE_API API ERROR............", error)
      toast.error("Could Not Profile Picture")
    }
    toast.dismiss(toastId)
  }
}

export const searchUser = async (data, token, dispatch) => {
  let result = null
  dispatch(setLoadingSearch(true));
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("GET", SEARCH_USER_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("Search User API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not search User Profile")
    }
    response?.data?.data===[] ? (toast.success("No User found")):(toast.success("User Found successfully"))
    
    result = response?.data?.data
  } catch (error) {
    console.log("User Searching API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  dispatch(setSearchData(result));
  dispatch(setLoadingSearch(false));
  return result
}