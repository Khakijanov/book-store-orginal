function SingleCategory({img, title}) {
  return (
    <div className="max-w-[416px] w-full max-h-[247px] h-full">
      <img className="w-full object-cover rounded-xl" src={img} alt="category image" />
      <h3 className="text-center taxt-2xl primary">{title}</h3>
    </div>
  );
}

export default SingleCategory;
