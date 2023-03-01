import React, { useEffect, useState, useRef } from 'react';
import GalleryItem from './Gallery/GalleryItem'
import Modal from './Gallery/Modal'
import Loading from './Loading'
import Form from './Form'
import { Route, Routes } from "react-router-dom"

const Gallery = () => {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(3);
  const [lastElement, setLastElement] = useState(null);

  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setLimit((no) => no + 3);
        }
      })
  );

  const openModal = (item) => {
    setOpen(true)
    setActiveItem(item)
  }

  useEffect(() => {
    fetchImages()
  }, [limit]);

  const fetchImages = async () => {
    setLoading(true)
    fetch(`images?limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setLoading(false)
      })
      .catch(error => {
        setError(true)
      });
  }

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <div className='app'>
      <Routes>
        {/* <Route path="/" element={<Form />} /> */}
        <Route path="/form" element={<Form />} />
      </Routes>
      {error ? (
        <div className="w-screen h-screen inset-0 fixed flex justify-center items-center">
          <div className="bg-rose-500 text-white px-2.5 rounded p-1">
            Oh no! Something went wrong, we might be fixing things, hang tight...
          </div>
        </div>
      ) : (
        <>
          <div className="px-5 md:px-10 p-10 space-y-5 max-w-[1600px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                images && images.map((img, i) => {
                  return (
                    <div key={img.id} ref={setLastElement} className={`${(i % 6 === 0) && 'lg:col-span-2 lg:row-span-2'}`} style={{order: i % 12 === 0 ? i + 2 : i}}>
                      <GalleryItem img={img} openModal={openModal} />
                    </div>
                  )
                })
              }
            </div>
            {loading && <Loading />}
          </div>
          <Modal open={open} setOpen={setOpen} item={activeItem} />
        </>
      )}
    </div>
  );
}

export default Gallery;
