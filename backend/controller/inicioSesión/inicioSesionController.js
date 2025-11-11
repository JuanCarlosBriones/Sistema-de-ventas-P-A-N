import prisma from "../../models/prisma.js"

const createUser = async (req, res) => {
    
    try {
        const {nombre, password} = req.body
        if (!nombre || !password) {
            return res.status(400).json({ error: "Faltan datos" })
        }


        const user = await prisma.usuario.findFirst({
            where: {
                user_name: nombre,
                user_password: password
            },
        })
        
       if(!user){
        return res.status(401).json({error:"Usuario o contraseña incorrectos"})
       }
       res.json({
        message:"login Exitoso",
        user:{
            id_user: user.id_user,
            user_name: user.user_name,
            RolId: user.RolId,
        },
       })
    } catch (error) {
        console.error('Error al crear usuario: ', error)
    }
}

export {createUser}