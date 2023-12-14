
export const creatError = (status, message)=>{
    const err =  newError();
    err.status= status;
    err.message = message;
    return err ;
};
//