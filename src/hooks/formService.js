export const submitForm = async (formData) => {
    const encodedData = new URLSearchParams({
      ...formData,
      token: "0123654",
      formType: "enquiry",
    }).toString();
  
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwSst-8YyDb6Jpn__QLzsiya1iXpNdTaEmVTX955Lq8MhIjBFTHQTH0JnOkwI-79GoYeA/exec",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: encodedData,
      }
    );
  
    const text = await response.text();
    return JSON.parse(text);
  };
  