import { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { setAddress, setProvider, setSigner } from "./reducers/dataSlice";
import "./styles.css";
import { LOCK_ADDRESS, BEETOKEN_ADDRESS } from "./constants/addresses.js";
import {
  setBeeTokenContract,
  setLockContract
} from "./reducers/contractsSlice";
import { useProviderCustom } from "./hooks/useProvider";

export default function App() {
  const dispatch = useDispatch();

  // sürekli useSelector'den provider değerini almaktansa, kendimize göre bir hook yazarak tüm componentlerde import edip kullanabiliriniz.
  const providerCustom = useProviderCustom();
  console.log(providerCustom);

  const provider = useSelector((state) => state.data.provider);
  const signer = useSelector((state) => state.data.signer);
  const address = useSelector((state) => state.data.address);

  const lock = useSelector((state) => state.contract.lock);
  const beeToken = useSelector((state) => state.contract.beeToken);

  const connect = () => {
    /* Bu func. fazladan componentin Re-render yapmasını engeller.
      Func içerisindeki dispatchler bir action olarak sayılır.
      Bu iki değer güncellendikten sonra component tekrar mount olur.
    */
    batch(() => {
      dispatch(setSigner("Furkan"));
      dispatch(setAddress("Kartal/Istanbul"));
    });
  };

  useEffect(() => {
    dispatch(setProvider("TestValue"));
    dispatch(setLockContract(LOCK_ADDRESS));
    dispatch(setBeeTokenContract(BEETOKEN_ADDRESS));

    console.log(lock);
    console.log(beeToken);
  }, []);

  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
    </div>
  );
}
