import React, {useState} from 'react';
import Navbar from './components/navbar'

const potterDetail = [
{
name: 'Pragatheeswaran',
position: 'CEO'
},
{
name: 'bala',
position: 'Founder'
},
{
name: 'hari',
position: 'Co-Founder'
},
{
name: 'vasanth',
position: 'Health Department'
},
{
name: 'Naveen',
position: 'Financial Department'
}
]

export default function App() {
const [like, setLike] = useState(0)
const [input, setInput] = useState('')


const balaClicked = () => {
alert('clicked')
}

const handleChange = (e) => {
  setInput(e.target.value)
}

return (
<>
<Navbar />
  <div className="ps-5 pe-5 pt-5">
    <div class="alert alert-primary" role="alert">
      Liked by {like} members
    </div>
  </div>
  <div className="ps-5">
    <button type="submit" onClick={()=>{setLike(like + 1)}} className="btn btn-success">Like</button>
  </div>
  <div className="ps-5 pt-5">
    <button type="submit" onClick={()=>{setLike(like - 1)}} className="btn btn-danger">DisLike</button>
  </div>

  <div className="flex">
    {potterDetail.map(e =>
    <div className="pt-4 ps-5 d-inline-flex">
      <div class="card">
        <div class="card-header">
          PotterGang
        </div>

        <div className="card-body pt-4">
          <blockquote className="blockquote mb-0">
            <p>{e.name}</p>
            <footer className="blockquote-footer">{e.position}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    )}
  </div>
  <div className="pt-5 ps-5">
    <p>{input}</p>
  </div>
  <div className="pt-2 ps-5">
    <form className="row g-3">
      <div className="col-auto">
        <label for="inputPassword2" className="visually-hidden">Name</label>
        <input type="text" name="fullName" onChange={handleChange} className="form-control" id="inputPassword2" placeholder="FullName" />
      </div>
      <div className="col-auto">
        <button type="submit"  className="btn btn-primary mb-3">Submit</button>
      </div>
    </form>
  </div>

</>
);
}