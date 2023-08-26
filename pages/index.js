import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import Head from "next/head";


function NewsPage(){
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <Head>
                <title>Next js Events</title>
                <meta name="description" content="find a lot of great events" />
            </Head>
            <EventList items={featuredEvents} />
        </div>
    )
}

export default NewsPage;