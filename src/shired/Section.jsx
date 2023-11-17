const Section = ({ subHeading, Heading }) => {
  return (
    <div className="text-center">
      <h3 className="text-xl text-orange-400">{subHeading}</h3>
      <h2 className="text-2xl  text-orange-400 uppercase">{Heading}</h2>
    </div>
  );
};

export default Section;
