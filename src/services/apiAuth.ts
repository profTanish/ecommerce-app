import supabase from "./supabase";

type SignupProps = {
    name: string;
    email: string;
    password: string;
};

type LoginProps = {
    email: string;
    password: string;
};

export async function signup({ name, email, password }: SignupProps) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          avatar: "",
        },
      },
    });
  
    if (error) throw new Error(error.message);
  
    return data;
  } 

export async function login({ email, password }: LoginProps) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session) return null;

    const { data, error } = await supabase.auth.getUser();

    console.log(data);

    if (error) throw new Error(error.message);

    return data?.user;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}