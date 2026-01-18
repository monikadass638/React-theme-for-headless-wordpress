import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <section className="container  my-5 text-center">
            <h1 className="display-4  pt-5">Beyond the Blueprint: Complexity in Practice</h1>
            <h3>When Tech meets people, constraints and shifting priorities, nothing stays simple for long</h3>
            <div className="d-flex justify-content-center align-items-center gap-4 pt-4 mb-5">

                <Link to={`/blog/`} className="btn btn-outline-dark">
                    View Blog
                </Link>
                <Link to={`/blog/`} className="btn btn-secondary-blue">
                    Contact Me
                </Link>

            </div>
            <hr className="hr-hero my-5 border-2 opacity-75"></hr>
        </section>

    );
}