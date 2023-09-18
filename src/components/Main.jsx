import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataForSEO } from "../apis/OnPageSeo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./layout.css";

const Main = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  // const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidUrl = (inputUrl) => {
    const urlPattern =
      /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-_\.]+\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})?(\/[a-zA-Z0-9-._?#]+)*\/?$/;
    return urlPattern.test(inputUrl);
  };

  const handleSearch = async () => {
    if (!isValidUrl(url)) {
      setError("Invalid URL. Please enter a valid URL.");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    const requestData = [
      {
        url: url,
        enable_javascript: true,
        check_spell: false,
      },
    ];
    console.log("url: ",url);

    try {
      setLoading(true);
      const response = await fetchDataForSEO(requestData);
      navigate("/results", { state: response });
      console.log("response: ", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0">On-Page SEO Checker</h1>
            <h2 className="masthead-subheading mb-0">
              Analyze your website's seo
            </h2>
            <div className="row">
              <div className="col-xs-12 col-lg-6 offset-lg-3 mt-4">
                {error && (
                  <div className="alert alert-danger mt-3">{error}</div>
                )}

                <input
                  type="text"
                  className="form-control form-control-lg rounded-pill "
                  placeholder="Enter the website link"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={loading}
                />

                {loading ? (
                  <>
                    <button
                      className="btn btn-primary btn-xl rounded-pill mt-5"
                      onClick={handleSearch}
                      disabled={loading}
                    >
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        size="2xl"
                        style={{
                          "--fa-primary-color": "#ffffff",
                          "--fa-secondary-color": "#ffffff",
                        }}
                        className="report-spinner"
                      />{" "}
                      Generating ...
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary btn-xl rounded-pill mt-5"
                      onClick={handleSearch}
                    >
                      Generate Report
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
    </>
  );
};

export default Main;
