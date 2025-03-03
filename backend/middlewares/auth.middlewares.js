import joi from "joi"



//middleware to validate registration

const registerSchema=joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password:joi.string().min(6).max(30).required()
})


const validateRegistration=(req,res,next)=>{
    const {error}=registerSchema.validate(req.body)

    if(error){
        return res.status(400).json({error:error.details[0].message})
    }

    next()
}


export { validateRegistration }




//middleware to validate login



const loginSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})


const validateLogin=(req,res,next)=>{
    const {error}=loginSchema.validate(req.body)

    if(error){
        return res.status(400).json({error:error.details[0].message})
    }
    next()
}

export { validateLogin }