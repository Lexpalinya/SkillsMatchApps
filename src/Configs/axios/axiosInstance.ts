import axios from 'axios';
import {BaseULR} from '../config';

const axiosInstance = axios.create({
  baseURL: BaseULR,
  withCredentials: true, // ✅ ส่ง cookie ไปด้วย
});

export default axiosInstance;
