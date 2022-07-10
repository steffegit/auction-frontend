import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { SiteContext } from '../components/Context/Context'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

const predefinedImages = [
  {
    id: 1,
    url: 'https://www.reezocar.com/raw/autoscout24.it/RZCATSIT7153BB4BE6E1/MAZDA-MX-5-00.jpg',
  },
  {
    id: 2,
    url: 'https://www.cnet.com/a/img/resize/4688d2ce6693cc1e4953e63bc3df1a0b32b3dba2/hub/2022/05/05/727e79b6-dd72-40c8-9839-bbc3227dbd19/miata-ogi.jpg?auto=webp&fit=crop&height=675&width=1200',
  },
  {
    id: 3,
    url: 'https://thumbs.dreamstime.com/b/classic-red-mazda-mx-na-series-i-mazda-miata-front-cluj-napoca-romania-april-two-seat-convertible-roadster-retractable-70841855.jpg',
  },
]

function Post() {
  const { brands } = useContext(SiteContext)
  const [showModal, setShowModal] = useState(false)
  const [imgUrls, setImgUrls] = useState([])

  const [postData, setPostData] = useState({
    title: '',
    brand: 'Audi', //by default
    year: 0,
    location: '',
    km: 0,
    cost: 0,
    price: '',
    hrs: null,
    pic: '',
    pic1: '',
    pic2: '',
    type: 'heavy',
    classic: false,
    sold: false,
    promoted: true,
    currentHighestBidder: 1234,
  })

  const activateModal = () => setShowModal(true)
  const hideModal = () => setShowModal(false)

  const { createAuctionPost } = useContext(SiteContext)
  const { handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(imgUrls)
  }, [imgUrls])

  return (
    <div className="max-w-3xl mx-auto p-3 py-20 flex flex-col items-center justify-start sm:p-12 sm:py-20 rounded-md bg-white">
      <div className="text-3xl font-bold mb-10">Post a Bid</div>
      <form
        className="flex flex-col space-y-14 w-full"
        onSubmit={handleSubmit(() => {
          createAuctionPost(postData)
          alert('You have made a new post. Hurray!')
          navigate('/')
        })}
      >
        <div className="space-y-4 w-full">
          <div>
            <label htmlFor="title" aria-required>
              Title
              <input
                type="text"
                placeholder="ex: BMW M3"
                name="title"
                onChange={(event) =>
                  setPostData({ ...postData, title: event.target.value })
                }
                className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </label>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col w-2/4">
              <label htmlFor="category" aria-required>
                Category/Brand
              </label>
              <select
                id="category"
                name="category"
                onChange={(event) =>
                  setPostData({ ...postData, brand: event.target.value })
                }
                className="p-3 rounded-md border bg-white border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              >
                {brands?.map((item, idx) => (
                  <option value={item} className="m-2">
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-2/4">
              <label htmlFor="year">Make Year</label>
              <input
                type="number"
                min={0}
                name="year"
                placeholder="ex: 2020"
                onChange={(event) =>
                  setPostData({ ...postData, year: event.target.value })
                }
                className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col w-2/4">
              <label htmlFor="location" aria-required>
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="ex: San Francisco"
                onChange={(event) =>
                  setPostData({ ...postData, location: event.target.value })
                }
                className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </div>
            <div className="w-2/4">
              <label htmlFor="mileage">Mileage</label>
              <input
                type="number"
                min={0}
                name="mileage"
                placeholder="ex: 20000km"
                onChange={(event) =>
                  setPostData({ ...postData, km: event.target.value })
                }
                className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              min={0}
              name="price"
              placeholder="ex: 10.000$"
              onChange={(event) =>
                setPostData({ ...postData, cost: event.target.value })
              }
              className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
            />
          </div>
          <div>
            <label htmlFor="description" aria-required>
              Description
              <textarea
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                name="description"
                className="w-full min-h-[100px] p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </label>
          </div>
          {/* <div>
            <label className="w-full flex flex-col mx-auto p-4 items-center cursor-pointer bg-white rounded-md text-black border border-slate-400 focus:outline-none focus:border-slate-500">
              <input type="file" className="hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Upload</div>
            </label>
          </div> */}
          <div onClick={activateModal}>
            <label className="w-full flex flex-col mx-auto p-4 items-center cursor-pointer bg-white rounded-md text-black border border-slate-400 focus:outline-none focus:border-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Upload</div>
            </label>
          </div>
        </div>
        {showModal ? (
          <div className="flex overflow-scroll space-x-4">
            {predefinedImages.map((item, idx) => (
              <img
                src={item.url}
                className="w-[248px] aspect-video object-cover"
                onClick={() => {
                  setImgUrls((oldUrls) => [...oldUrls, item.url])
                  hideModal()
                }}
              />
            ))}
          </div>
        ) : null}
        <div className="text-xl font-medium">
          You have selected {imgUrls.length} images.
        </div>
        <button
          type="submit"
          className=" py-3 bg-secondary font-medium rounded-md text-white hover:bg-primary transition-all"
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
