const InputPhoneNumber = ({ setFlag }) => {
  const flags = [
    {
      number: "+62",
      flag: "fi fi-id",
    },
    {
      number: "+60",
      flag: "fi fi-my",
    },
    {
      number: "+61",
      flag: "fi fi-au",
    },
    {
      number: "+63",
      flag: "fi fi-ph",
    },
  ];

  const changeFlagIcon = (e, setFlag) => {
    setFlag(e.target.value);
    const icon = document.getElementById("idFlag");
    const classIcon = flags.find((flag) => flag.number === e.target.value);
    icon.className = classIcon.flag;
  };

  return (
    <div className="flex w-full">
      <div className="basis-1/3 bg-gray-400">
        <span id="idFlag" className="fi fi-my"></span>
      </div>
      <div className="basis-2/3">
        <select
          name="flag"
          id="flag"
          onChange={(e) => changeFlagIcon(e, setFlag)}
        >
          <option value="+60">+60</option>
          <option value="+61">+61</option>
          <option value="+62">+62</option>
          <option value="+63">+63</option>
        </select>
      </div>
    </div>
  );
};
export default InputPhoneNumber;
