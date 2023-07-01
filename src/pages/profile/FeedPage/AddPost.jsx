import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../../../services/operations/PostAPI';
function AddPost() {
    const [showEmojis, setShowEmojis] = useState(false);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
  const emojiContainerRef = useRef();


    const [postInputForm, setPostInputForm] = useState({
        content: '',
        pic: '',
    });


    const emojiLib = [
        '🙂',
        '😊',
        '🤗',
        '😄',
        '😅',
        '😆',
        '😂',
        '🤣',
        '😘',
        '🥰',
        '😍',
        '🤩',
        '😇',
        '😎',
        '😋',
        '😜',
        '🙃',
        '😴',
        '🤯',
        '🥳',
      ];

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        let base64File = await toBase64(file);
        setPostInputForm({ ...postInputForm, pic: base64File });
    };


    return (
        < div class="flex flex-col bg-nav-background  dark:bg-dark-secondary-background  text-txt-color dark:text-dark-txt-color rounded-lg drop-shadow-2xl dark:divide-primary divide-y divide-primary w-[50%] mx-auto" >
            <div class="p-4">
                <h1 class="text-xl">Create Post</h1>
            </div>
            <div class="p-4">
                <div class="flex flex-col gap-4 grow">
                    <div class="flex items-center gap-4 grow">
                        <img class="h-14 w-14 rounded-full object-cover" src={localStorage.getItem("image").split(`"`)[1]} alt="profile-img" loading='lazy' />
                        <input class="grow focus:outline-none font-normal text-txt-secondary-color text-lg dark:bg-dark-secondary-background dark:text-dark-txt-secondary-color" placeholder="Write something here" type="text" value={postInputForm.content}
                            onChange={(e) =>
                                setPostInputForm({
                                    ...postInputForm,
                                    content: e.target.value,
                                })
                            } />
                    </div>
                    {postInputForm.pic ? (
                        <div className='relative'>
                            <img src={postInputForm.pic} alt='post pic' />
                            <i
                                onClick={() =>
                                    setPostInputForm({ ...postInputForm, pic: '' })
                                }
                                className='absolute top-1 right-1 text-4xl text-txt-hover-color cursor-pointer fas fa-times-circle'
                            ></i>
                        </div>
                    ) : null}
                    <ul class="border-t border-t-primary flex pt-4 gap-4 font-light items-center">
                        <li class="relative flex items-center gap-3 bg-secondary-background dark:bg-dark-nav-background py-2 px-3 rounded-md cursor-pointer">
                            <img class="h-6 w-6" src="https://res.cloudinary.com/donqbxlnc/image/upload/v1650190023/07_dffvl5.png" alt="phot" />
                            <p class="text-primary text-sm font-semibold">Photo/GIF</p>
                            <input class="cursor-pointer absolute w-28 opacity-0" 
                            accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp" 
                            type="file"
                            onChange={onFileChange} />
                        </li>
                        <li 
                        onClick={(e) => {
                            setShowEmojis(true);
                            if (
                              e.target.childNodes.length === 1 &&
                              e.target.innerText !== 'Emojis'
                            ) {
                              setPostInputForm({
                                ...postInputForm,
                                content:
                                  postInputForm.content + e.target.innerText,
                              });
  
                              setShowEmojis(false);
                            }
                          }}
                        class="relative flex items-center gap-3 bg-secondary-background dark:bg-dark-nav-background py-2 px-3 rounded-md cursor-pointer">
                            <img class="h-6 w-6" 
                            src="https://res.cloudinary.com/donqbxlnc/image/upload/v1652278871/Sunglasses_Emoji_be26cc0a-eef9-49e5-8da2-169bb417cc0b_grande_tz0jya.png" 
                            alt="emojis" />
                            <p class="text-primary text-sm font-semibold">Emojis</p>
                            {showEmojis ? (
                          <div
                            ref={emojiContainerRef}
                            className='absolute w-48 p-4 flex flex-wrap justify-center items-center gap-2 rounded-lg dark:bg-dark-nav-background  bg-secondary-background '
                          >
                            {emojiLib.map((el) => {
                              return (
                                <span
                                  key={el}
                                  className='cursor-pointer text-2xl'
                                >
                                  {el}
                                </span>
                              );
                            })}
                          </div>
                        ) : null}
                        </li>
                    </ul>
                </div>
            </div>
            <button 
                onClick={() => {
                    dispatch(
                      createPost({
                        data: { ...postInputForm },
                        token: token,
                      })
                    );
                    setPostInputForm({ content: '', pic: '' });
                  }}
                disabled={postInputForm.content ? false : true}
                class={`mb-4 mx-4 p-2 bg-primary active:bg-blue-500 text-white rounded-lg
                ${ postInputForm.content
                    ? ''
                    : 'cursor-not-allowed bg-txt-hover-color active:bg-txt-hover-color'} `}>Post</button>
        </div>

    )
}

export default AddPost
