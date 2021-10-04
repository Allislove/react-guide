import React from 'react';
import '../footer.css'


const Footer = () => {


    return(
        <div className="container footer mt-5">
            <div className="row">
                <div className="col-sm-4 mt-5">
                    <section className="card-body">
                        <h3 className="card-title"> Social NetWorks </h3>
                        <div className="row">
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                        </div>
                    </section>
                </div>

                <div className="col-sm-4 mt-5">
                    <section className="card-body">
                        <h3 className="card-title"> Social Networks 2 </h3>
                        <div className="row">
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                        </div>
                    </section>
                </div>

                <div className="col-sm-4 mt-5">
                    <section className="card-body">
                        <h3 className="card-title"> Social Network 3 </h3>
                        <div className="row">
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}


export default Footer;