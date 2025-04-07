import { UserAttributes } from "@supabase/supabase-js";
import supabase from "./supabase";

type SignupProps = {
  name: string;
  email: string;
  password: string;
  address: {
    phone: string;
    city: string;
    street: string;
  };
};

type LoginProps = {
  email: string;
  password: string;
};

type updateUserProps = {
  password?: string;
  fullName?: string;
};

export async function signup({ name, email, password, address }: SignupProps) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        address,
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
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateUser({ password, fullName }: updateUserProps) {
  let updateValue: Partial<UserAttributes> = {};
  if (password) updateValue.password = password;
  if (fullName) updateValue.data = { fullName };

  const { data, error } = await supabase.auth.updateUser(updateValue);

  if (error) throw new Error(error.message);

  return data;
}