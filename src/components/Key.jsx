 export const Key = ({ alias, val, handleClick, style }) => {
    return (
      <button className={`btn ${style}`} onClick={() => handleClick(val)}>
        {alias ? alias : val}
      </button>
    );
  };