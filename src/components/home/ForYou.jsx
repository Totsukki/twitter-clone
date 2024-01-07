const ForYou = () => {
  return (
    <div>
      {[...Array(200).keys()].map((e) => {
        return <div key={e}>Hello {e + 1}</div>;
      })}
    </div>
  );
};

export default ForYou;
