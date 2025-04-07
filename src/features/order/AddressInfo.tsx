type AddressInfoProps = {
    address: {
        phone: string;
        city: string;
        street: string;
    };
    name: string;
    email: string;
};

const AddressInfo = ({ address, name, email }: AddressInfoProps) => {
    return (
        <div>
            <h3 className="heading-tertiary">Address</h3>
            <div className="text-textGray">
                <p>
                    {address.street}, {address.city}
                </p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{address.phone}</p>
            </div>
        </div>
    );
};

export default AddressInfo;