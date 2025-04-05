import ButtonMoveBack from "@/components/ButtonMoveBack";

const Account = () => {
    return (
        <div className="max-w-container mx-auto py-16">
            <ButtonMoveBack />
            <h3 className="text-3xl font-bold">Account Settings</h3>
            <p className="text-textGray">Change your profile & account settings.</p>

            <div className="bg-lightGray p-5 rounded-md mt-10">Settings</div>
        </div>
    );
};

export default Account;