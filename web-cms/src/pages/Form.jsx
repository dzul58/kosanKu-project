const Form = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="facility">Facility:</label>
        <input
          type="text"
          id="facility"
          name="facility"
          value={formData.facility}
          onChange={handleChange}
          required
        />

        <label htmlFor="roomCapacity">Room Capacity:</label>
        <input
          type="number"
          id="roomCapacity"
          name="roomCapacity"
          value={formData.roomCapacity}
          onChange={handleChange}
          required
        />

        <label htmlFor="imgUrl">Image URL:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="typeId">Type:</label>
        <select
          id="typeId"
          name="typeId"
          value={formData.typeId}
          onChange={handleChange}
          required
        >
          <option value={1}>Type 1</option>
          <option value={2}>Type 2</option>
          <option value={3}>Type 3</option>
          {/* Add more options as needed */}
        </select>

        <button type="submit">Add Kosan</button>
      </form>
    </>
  );
};

export default Form;
