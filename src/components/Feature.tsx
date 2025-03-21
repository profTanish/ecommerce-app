type FeaturePropsType = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  };
  
  const Feature = ({ icon: Icon, title, description }: FeaturePropsType) => {
    return (
      <div className="flex gap-5">
        <span className="p-2.5 rounded-full bg-lightGray self-start">
          <Icon className="text-3xl" />
        </span>
        <div>
          <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Feature;