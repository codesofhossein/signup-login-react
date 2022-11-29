import { toast } from 'react-toastify';

 export const notify = (text , type) => {

    if (type === "success") {

        toast.success(text , {

            pauseOnHover: false,
            theme: "colored",
            autoClose: 3000,

            });
    }
    else if (type === "error") {

        toast.error(text , {

            pauseOnHover: false,
            theme: "colored",
            autoClose: 3000,

            });
    }
}
