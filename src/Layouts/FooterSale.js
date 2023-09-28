import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FooterSale = () => {
  const [footerData, setFooterData] = useState([]);
  useEffect(() => {
    fetch("json/footer.sale.menu.json")
      .then((res) => res.json())
      .then((data) => setFooterData(data));
  }, []);
  return (
    <div>
      <div className="grid mdl:grid-cols-3 sml:grid-cols-2 gap-y-10">
        {footerData?.map((d, index) => {
          console.log(d.second);
          return (
            <div key={index}>
              <h1 className="text-black underline font-semibold pb-3 text-lg">
                <Link to={"/"}>
                  {d.first?.name ||
                    d.second?.name ||
                    d.third?.name ||
                    d.forth?.name ||
                    d.fifth?.name ||
                    d.six?.name ||
                    d.seven?.name}
                </Link>
              </h1>

              {d?.first?.DubaiApartments.map((d) => (
                <p className="text-secondary font-medium text-sm">
                  <Link to={"/"}>{d}</Link>
                </p>
              ))}
              {d?.second?.AbuDhabiApartments?.map((d) => (
                <p className="text-secondary font-medium text-sm">
                  <Link to={"/"}>{d}</Link>
                </p>
              ))}
              {d?.third?.ApartmentsinotherEmirates?.map((d) => (
                <p className="text-secondary font-medium text-sm">
                  <Link to={"/"}>{d}</Link>
                </p>
              ))}
              {d?.forth?.DubaiVillas?.map((d) => (
                <p className="text-secondary font-medium text-sm">
                  <Link to={"/"}>{d}</Link>
                </p>
              ))}
              {d?.fifth?.AbuDhabiVillas?.map((d) => (
                <p className="text-secondary font-medium text-sm">
                  <Link to={"/"}>{d}</Link>
                </p>
              ))}
              {d?.six?.VillasinotherEmirates?.map((d) => (
                <p className="text-secondary font-medium text-sm">
                  <Link to={"/"}>{d}</Link>
                </p>
              ))}
              {d?.seven?.PopularPropertyforSalesearchesintheUAE?.map((d) => (
                <p className="text-secondary font-medium text-sm">
                  <Link to={"/"}>{d}</Link>
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSale;
