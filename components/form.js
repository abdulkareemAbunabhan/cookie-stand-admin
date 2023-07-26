export default function Form(props) {
    return (
      <form className="bg-green-300 self-center flex flex-col items-center rounded p-4 m-3" onSubmit={props.handler}>
        <h3 className="self-center text-2xl font-semibold m-4">Create Cookie Stand</h3>
        <div>
          <label className="m-2 text-lg font-semibold" htmlFor="location">
            Location
          </label>
          <input className="flex-auto p1-1" name="location" placeholder={props.data[0]}/>
        </div>
        <div className="self-center flex flex-row justify-center">
          <div className="flex flex-col m-2">
            <label className="m-1 text-lg font-semibold" htmlFor="minimum">
              Minimum customer per hour
            </label>
            <input className="flex-auto p1-1" type="number" name="minimum" placeholder={props.data[1]} />
          </div>
          <div className="flex flex-col m-2">
            <label className="m-1 text-lg font-semibold" htmlFor="maximum">
              Maximum customer per hour
            </label>
            <input className="flex-auto p1-1" type="number" name="maximum" placeholder={props.data[2]}/>
          </div>
          <div className="flex flex-col m-2">
            <label className="m-1 text-lg font-semibold" htmlFor="average">
              Average sales per hour
            </label>
            <input className="flex-auto p1-1" type="number" name="average" placeholder={props.data[3]}/>
          </div>
          <div className="m-2">
            <button className="text-4xl p-2 bg-green-400 rounded" type="submit">Create</button>
          </div>
        </div>
      </form>
    );
  }