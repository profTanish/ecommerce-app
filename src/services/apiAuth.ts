import supabase from "./supabase";

type LoginProps = {
    email: string;
    password: string;
};

export async function login({ email, password }: LoginProps) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    console.log(data);
    return data;
}