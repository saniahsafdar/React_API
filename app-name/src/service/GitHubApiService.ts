const ghCredentials:string = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";

const credentials = btoa(ghCredentials);//Base 64 encode 


export function fetchUserProfile(){
    //Not Finished
    console.log(ghCredentials);
    console.log(credentials)
    
}
