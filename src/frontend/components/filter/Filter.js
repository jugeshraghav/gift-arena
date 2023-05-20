export const Filter = () => {
  return (
    <>
      <p>Filters</p>

      <p>Type</p>
      <div>
        <input type="checkbox" />
        Cakes
      </div>
      <div>
        <input type="checkbox" />
        Flowers
      </div>
      <div>
        <input type="checkbox" />
        Plants
      </div>

      <fieldset>
        <legend>Price</legend>
        <input type="range" min="100" max="2000"></input>
      </fieldset>

      <p>Sort By Price</p>
      <div>
        <input type="radio" />
        Low to High
      </div>
      <div>
        <input type="radio" />
        High To Low
      </div>
    </>
  );
};
