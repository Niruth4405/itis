import { X, Download } from 'lucide-react';
import { useRef } from 'react';


function Modal({ onClose }) {

    const ModalRef = useRef();

    const closeModal = (e) => {
        if(ModalRef.current === e.target){
            onClose();
        }
    }
    return (
        <>
            <div ref={ModalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-6'>
                    <button onClick={onClose} className='place-self-end'><X /></button>
                    <div className=' bg-indigo-500 p-4 rounded-lg text-white'>
                        <h1 className='uppercase text-center text-4xl font-bold'>Get your ebook now</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem.</p>
                        <form action="">
                            <center>
                                <input type="email" placeholder='Johndoe@mail.com' className='py-2 rounded-lg mb-2 px-6' />
                                <button className='px-5 py-2 bg-black rounded-lg flex justify-center items-center text-xl'>Get your ebook <Download className='ml-2' /></button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal