import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";




//register api
export const registerAPI = async(user)=>{
  return  await commonAPI('POST',`${BASE_URL}/users/register`,user,"")
}

//login api
export const loginAPI = async(user)=>{
return  await commonAPI('POST',`${BASE_URL}/user/login`,user,"")
}


//register api
export const OwnerregisterAPI = async(user)=>{
  return  await commonAPI('POST',`${BASE_URL}/owner/register`,user,"")
}

//login api
export const OwnerloginAPI = async(user)=>{
return  await commonAPI('POST',`${BASE_URL}/owner/login`,user,"")
}

//add hostel
export const addHostelAPI = async(reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/hostels/add`,reqBody,reqHeader)
}

//all project select
export const allHostelAPI = async(searchKey,reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/hostel/all-hostel?search=${searchKey}`,"",reqHeader)
}

//all project
export const allHostelnewAPI = async(reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/hostel/all-hostel-new`,"",reqHeader)
}

//owner hostel
export const ownerHostelAPI = async(reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/owner/all-hostel`,"",reqHeader)
}

//edit hostel
export const editHostelAPI = async(hostelId,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${BASE_URL}/hostel/edit/${hostelId}`,reqBody,reqHeader)
}

//edit admin Confirm
export const editAdminConfirmAPI = async(hostelId,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${BASE_URL}/admin/edit/${hostelId}`,reqBody,reqHeader)
}


//delete hostel
export const deleteHostelAPI = async(hostelId,reqHeader)=>{
  return await commonAPI('DELETE',`${BASE_URL}/hostel/remove/${hostelId}`,{},reqHeader)
}

//booking hostel
export const bookingHostelAPI = async(reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/user/booking`,reqBody,reqHeader)
}

//booked deatils
export const bookedUserDtAPI = async (hostelID,reqHeader) => {
  return await commonAPI('GET', `${BASE_URL}/owner/booked-details/${hostelID}`, "", reqHeader);
}

//delete details
export const delteUserDtAPI = async (userdtId,reqHeader) => {
  return await commonAPI('DELETE', `${BASE_URL}/userdt/remove/${userdtId}`,{}, reqHeader);
}

//edit AdminCOnfirm
export const adminHostelConfirmApi = async(hostelId,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${BASE_URL}/hostel/edit/${hostelId}`,reqBody,reqHeader)
}


//owner msg
export const OwnerMsgAPI = async(reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/owner/msg`,reqBody,reqHeader)
}


//getting Owner msg
export const getOwnerSndAPI = async (hostelID,reqHeader) => {
  return await commonAPI('GET', `${BASE_URL}/owner/snd-msg/${hostelID}`, "", reqHeader);
}

//admin msg
export const AdminMsgAPI = async(reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/admin/msg`,reqBody,reqHeader)
}


//getting Admin msg
export const getAdminSndAPI = async (hostelID,reqHeader) => {
  return await commonAPI('GET', `${BASE_URL}/admin/snd-msg/${hostelID}`, "", reqHeader);
}