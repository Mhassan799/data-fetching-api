const UserModel = require('../model/userModel');

const userController = {
    async contact(req,res){
        const {name,email,message, userType}= req.body;
        
        
        try {
            // const userType = req.user?.userType;
            // console.log("req.user", req.user);
            if (!(userType === "admin" || userType === 'manager')) {
                return res.status(403).send({
                    success: false,
                    message: "Permission denied only admin or manager can access",
                });
            }
            if(!name || !email || !message){
                return res.status(400).send({
                    success:false,
                    message:"all feilds required",
                })
            }

            const userMessage = new UserModel({
                name,
                email,
                message,
            })
            await userMessage.save()

            return res.status(200).send({
                success:true,
                message:"form has submitted ssuccesfully"
            })
        }

        
         catch (error) {
            console.log(error)
            return res.status(401).send({
                success:false,
                message:"somthinng went wrong",
                error:error.message,
            })
        }
    }
}

module.exports=userController;