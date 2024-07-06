function SingleCategory({img, title}) {
  return (
    <div className="max-w-[416px] w-full">
      <img className="w-full object-cover rounded-xl" src={img} alt="category image" />
      <h3>{title}</h3>
    </div>
  );
}

export default SingleCategory;
