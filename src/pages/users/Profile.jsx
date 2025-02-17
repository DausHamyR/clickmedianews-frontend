import Header from "../../components/Headers.jsx"
import Picture from "../../assets/img/picture_login.png"
import Footer from "../../components/Footers.jsx"
import { FaChevronLeft } from "react-icons/fa"
import picture_category from "../../assets/img/articel.jpg"
import { BiLike, BiTimeFive} from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"

// import { IoIosArrowForward } from "react-icons/io"
// import { Link } from "react-router-dom"

const Profile = () => {
    return(
        <>
            <div className='h-min-screen'>
                <nav>
                    <Header/>
                </nav>
                <div className='pt-28 px-28 flex flex-col gap-20 bg-secondary'>
                    <div className='flex justify-between px-[50px]'> 
                        <div className='flex gap-4 items-center'>
                            <div><FaChevronLeft/></div>
                            <div className='font-bold'>Category</div>
                        </div>
                        <div className='font-bold text-[24px]'>Joe Daniel</div>
                        <div></div>
                    </div>
                   
                </div>
                <div className=' flex justify-between bg-secondary '>
                    <div className='w-[50%] px-[150px] pt-24 pb-24 flex flex-col items-center gap-16 '>
                        <div className='w-[295px] h-[284px] shadow-2xl rounded-2xl bg-white relative'>
                            <div className='flex gap-5 items-center w-full h-[120px] px-10'>
                                <div className='border-2 rounded-3xl border-blue-500 p-1'>
                                    <div className='rounded-3xl border-2 border-gray-50 overflow-hidden w-16 h-16'>
                                        <img src={Picture} className='object-cover' />
                                    </div>
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <div>@jonathan</div>
                                    <div className='font-bold'>Joe Daniel</div>
                                    <div>Member</div>
                                </div>
                            </div>
                            <div className='px-10'>
                                <div className='font-bold'>About Me</div>
                                <div>Madison Blackstone is a director of publisher, with experience managing global teams.</div>
                            </div>
                            <div className='h-[215px] w-[70px] rounded-2xl absolute bottom-[25px] right-[-30px]  bg-blue-500 flex flex-col text-white text-center'>
                                <div className='rounded-r-2xl border-1 pt-1 rounded-l-2xl h-20 w-[70px] flex flex-col items-center justify-center bg-blue-600'>
                                    <div className='font-bold'>52</div>
                                    <div className='text-[10px]'>Post</div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col pt-1 gap-1'>
                                        <div className='font-bold'>250</div>
                                        <div className='text-[10px]'>Visitor</div>
                                    </div>
                                    <div className='flex flex-col gap-1 pt-1'>
                                        <div className='font-bold'>4.5K</div>
                                        <div className='text-[10px]'>Comments</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div><button className='btn btn-primary min-w-[295px] '>Messages</button></div>
                            <div><button className='btn btn-gray-400 min-w-[295px] hover:bg-primary '>Following</button></div>
                            <div><button className='btn bg-green-500 min-w-[295px] text-black hover:bg-primary outline-none border-0 '>Accept Author Request</button></div>
                        </div>
                    </div>
                    <div className='pt-28'>
                        <div className=' border-l-2 h-[400px] border-black '></div>
                    </div>
                    <div className='flex-1 w-full px-[70px] pt-24 pb-24 flex flex-col items-center'>
                        <div className='flex flex-col gap-8'>
                            <div className='text-[25px]  font-bold'>Post</div>
                            <div className='flex gap-4'>
                                <div>
                                    <div className='flex  bg-white w-[247px] h-[221px] rounded-2xl gap-8 drop-shadow-2xl '>
                                        <div className='flex flex-col' >
                                            <div className='w-[247px] h-[87px] rounded-2xl overflow-hidden bg-green-400'>
                                                <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                            </div>
                                            <div className='px-4 py-2'>
                                                <div className='flex flex-col gap-2 items-center' >
                                                    <div className='flex flex-col gap-4'>
                                                        <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                        <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                    </div>
                                                    <div className='flex gap-4'>
                                                        <div className='flex gap-2 items-center'>
                                                            <div><BiLike/></div>
                                                            <div>2.1k</div>
                                                        </div>
                                                        <div className='flex gap-2 items-center'>
                                                            <div><BiTimeFive/></div>
                                                            <div>3m ago</div>
                                                        </div>
                                                        <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex  bg-white w-[247px] h-[221px] rounded-2xl gap-8 drop-shadow-2xl '>
                                    <div className='flex flex-col' >
                                        <div className='w-[247px] h-[87px] rounded-2xl overflow-hidden bg-green-400'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='px-4 py-2'>
                                            <div className='flex flex-col gap-2 items-center' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike/></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive/></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex  bg-white w-[247px] h-[221px] rounded-2xl gap-8 drop-shadow-2xl '>
                                    <div className='flex flex-col' >
                                        <div className='w-[247px] h-[87px] rounded-2xl overflow-hidden bg-green-400'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='px-4 py-2'>
                                            <div className='flex flex-col gap-2 items-center' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike/></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive/></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex  bg-white w-[247px] h-[221px] rounded-2xl gap-8 drop-shadow-2xl '>
                                    <div className='flex flex-col' >
                                        <div className='w-[247px] h-[87px] rounded-2xl overflow-hidden bg-green-400'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='px-4 py-2'>
                                            <div className='flex flex-col gap-2 items-center' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike/></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive/></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                       
                        
                       

                    
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Profile