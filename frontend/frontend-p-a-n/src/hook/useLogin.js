import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

const useLogin = () => {
    return useMutation({
        mutationFn: async ({ nombre, password }) => {
            const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, password }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || "Error al iniciar sesión")
            return data 
        },
        onSuccess: (data) => {
            toast.success(`Bienvenido ${data.user.user_name}`)
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })
}

export default useLogin