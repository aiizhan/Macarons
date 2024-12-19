import React from "react";
import logoAdmin from "../../../shared/assets/svg/logoAdmin.svg";
import VerticalTabs from "./TabPanel";
import Container from "../../../shared/Container/Container";

function Dashboard() {
  return (
    <div className="bg-[#FFD6D6]">
      <Container>
        <div className="flex justify-between items-center font-bold p-4">
          <div>
            <img src={logoAdmin} alt="logo" className="h-10" />
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-lg font-semibold">Бекенова Сабина</h2>
              <p className="text-sm text-gray-600">Бишкек, Кыргызстан</p>
            </div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://s3-alpha-sig.figma.com/img/2e3c/cf43/75512b6e414168840fe8eac070f5c423?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SfNPOUqI6nWBBqp-O4dVG519z6OLsi3HYWw-HkPW57pKJdgJAgg3m6Ywlh0Lqahp~R7uMTKPNVOb9no9ZSgKKqjuMDvuWBa0lHefS4JqXjzB8tUBL6I1-2F7rz-tLvicBe6BTr4DpvAKm8OblYZXULVNNmdBRySs0JsCRVJ-~3HuTcRHlwQSI2dddmNp3uqO4nr6gaC-3~lv537uKAKsfnCcaP85LyUgRQkIUpBsgbtLW3Wnco-y8TXQUPVi~z3JuZdhVUJIbl64ORGPrv6CgQSOCK1KGUkHdtBYLeARGqQt4oVG00FcodCd~h8IpIoxLv1XNpfLXU~R3WnzJz2SBw__"
              alt="User Avatar"
            />
          </div>
        </div>
      </Container>
      <div>
        <VerticalTabs />
      </div>
    </div>
  );
}

export default Dashboard;
