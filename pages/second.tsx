import Link from "next/link";

const SecondPage = function NextPage() {
    return (
        <main>
            <h1>Second Page</h1>
            <p>
                This is the second page{' '}
                <Link href="/">
                    <a target="_blank" rel="noreferrer">
                        click here to back home
                    </a>
                </Link>
            </p>
        </main>
    );
};

export default SecondPage;
