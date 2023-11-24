import { useState } from 'react'
import PropTypes from 'prop-types'

Modal.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onAccept: PropTypes.func,
  children: PropTypes.node,
}

function Modal({ title, body, onAccept = () => {}, children }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>{children}</button>

      {showModal && (
        <>
          <div
            className='fixed left-0 top-0 z-10 h-full w-full overflow-y-auto overflow-x-hidden outline-none backdrop-blur'
            onClick={() => setShowModal(false)}></div>
          <div className='fixed z-20 w-full left-1/2 -translate-x-1/2 top-10 transition-all duration-300 ease-in-out md:mx-auto md:mt-7 md:max-w-lg'>
            <div className='md:shadow-lg pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-slate-100 text-slate-900 shadow-lg outline-none'>
              <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4'>
                <h5 className='text-xl font-medium leading-normal text-neutral-800'>
                  {title}
                </h5>
                <button
                  type='button'
                  className='box-content rounded-none border-none focus:shadow-none focus:outline-none'
                  onClick={() => setShowModal(false)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='h-6 w-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <div className='relative flex-auto p-4'>{body}</div>

              <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4'>
                <button
                  type='button'
                  className='inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                  onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button
                  type='button'
                  className='bg-slate-500 px-6 py-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0 active:bg-slate-700'
                  onClick={() => {
                    setShowModal(false)
                    onAccept()
                  }}>
                  Accept
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Modal
