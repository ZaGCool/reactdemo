
export default function Sport(props){
  console.log(props);
  return (
    <div>
      运动产品 :{props.match.params.id}
      
    </div>
  )
}