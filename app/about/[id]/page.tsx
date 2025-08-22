const AboutDetailPage = async({params}) => {
    const {id} = await params;
    console.log(id);
  return (
    <div className="p-4">
      {/* สามารถใช้ค่า id เพื่อแสดงรายละเอียดได้ */}
      <h1>About Detail Page: ID {id}</h1>
      <p>This is a detail page for item with ID: {id}</p>
    </div>
  )
}
export default AboutDetailPage