import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <p className="leading-none text-muted-foreground">
                        Design &amp; built by Praneel M Thaker
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Portfolio template by{' '}
                        <a
                            href="https://github.com/Tajmirul/portfolio-2.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-white"
                        >
                            Tajmirul Islam
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
