import { Navbar, Footer } from "@/components";


export default function Docs(){
    
 
        // Function will execute on click of button
        const onButtonClick = () => {
         
            // using Java Script method to get PDF file
            fetch("CVResume.pdf").then((response) => {
                response.blob().then((blob) => {
                 
                    // Creating new object of PDF file
                    const fileURL =
                        window.URL.createObjectURL(blob);
                         
                    // Setting various property values
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = "CVResume.pdf";
                    alink.click();
                });
            });
        };
    return(
        <>
        <Navbar/>
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <h2 className="text-2xl font-semibold leading-tight">Documentation</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Ma</p>
            </div>
            <div className="flex flex-col mt-8">
              <h3>
                    Click on below button to download my CV
                    file
              </h3>
              <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </div>
        </div>
        <Footer/>

        </>
    )
}