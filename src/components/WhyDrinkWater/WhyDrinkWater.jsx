const WhyDrinkWater = () => {
  const list = [
    'Supply of nutrients to all organs',
    'Providing oxygen to the lungs',
    'Maintaining the work of the heart',
    'Release of processed substances',
    'Ensuring the stability of the internal environment',
    'Maintaining within the normal temperature',
    'Maintaining an immune system capable of resisting disease',
  ];
  return (
    <div>
      <h1>Why drink water</h1>
      <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default WhyDrinkWater;