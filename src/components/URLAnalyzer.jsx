import { useState } from "react";

export default function URLAnalyzer() {
  const [urlEntry, setUrlEntry] = useState("");
  const [urlHash, setUrlHash] = useState("");
  const [urlHost, setUrlHost] = useState("");
  const [urlHostname, setUrlHostname] = useState("");
  const [urlHref, setUrlHref] = useState("");
  const [urlOrigin, setUrlOrigin] = useState("");
  const [urlPassword, setUrlPassword] = useState("");
  const [urlPathname, setUrlPathname] = useState("");
  const [urlPort, setUrlPort] = useState("");
  const [urlProtocol, setUrlProtocol] = useState("");
  const [urlSearch, setUrlSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(urlEntry);
    let theUrl = new URL(urlEntry);
    console.log("url:", theUrl);
    setUrlHash(theUrl.hash);
    setUrlHost(theUrl.host);
    setUrlHostname(theUrl.hostname);
    setUrlHref(theUrl.href);
    setUrlOrigin(theUrl.origin);
    setUrlPassword(theUrl.password);
    setUrlPathname(theUrl.pathname);
    setUrlPort(theUrl.port);
    setUrlProtocol(theUrl.protocol);
    setUrlSearch(theUrl.search);
  };

  //   const resetInput = () => {
  //     setUrlEntry("");
  //   };

  return (
    <div className="container">
      <h1>URL Analyzer</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Put your URL here">Put your URL here: </label>
        <input
          name="url"
          type="text"
          onChange={(e) => setUrlEntry(e.target.value)}
          value={urlEntry}
        />
        <br />
        <button>Submit</button>
      </form>
      <div>
        <p>
          <span>Hash: </span>
          {urlHash}
        </p>
        <p>
          <span>Host: </span>
          {urlHost}
        </p>
        <p>
          <span>Hostname: </span>
          {urlHostname}
        </p>
        <p>
          <span>Href: </span> {urlHref}
        </p>
        <p>
          <span>Origin: </span> {urlOrigin}
        </p>
        <p>
          <span>Password: </span> {urlPassword}
        </p>
        <p>
          <span>Pathname: </span> {urlPathname}
        </p>
        <p>
          <span>Port: </span> {urlPort}
        </p>
        <p>
          <span>Protocol: </span> {urlProtocol}
        </p>
        <p>
          <span>Search: </span> {urlSearch}
        </p>
      </div>
    </div>
  );
}

/*
      URL properties
      hash - The part that starts with `#` and refers to an id
      host - Same as hostname except a specified port would be included
      hostname - the domain part without the http://
      href - the full url. Same as using .toString() method
      origin - Same as host prefixed with the protocol
      password - https://username:password@www.example.com
      pathname - after the domain. Folder and file name
      port - :80  :443
      protocol - http or https usually
      search - Begins with `?`. The query string
      searchParams - An object built from the parsed query string
      username - https://username:password@www.example.com
      */
