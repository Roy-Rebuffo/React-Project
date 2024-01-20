import axios from "axios";
const token = null;
const APIHeader = {    
  'Accept': 'application/json',    
  'Content-Type': 'application/json',    
  'Access-Control-Allow-Origin': '*',    
  'Authorization': {        
    toString(){            
      return `Bearer ${token}`;        
    }    
  }}

export const API = axios.create({
    headers: APIHeader,
    timeout: 10000,
    baseURL: 'http://localhost:5001/'
});
