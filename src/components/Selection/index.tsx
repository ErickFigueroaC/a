
import {useForm} from "react-hook-form";

const Selection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // register permite registrar los campos del formulario,
  // formState permite saber en que estado se encuentra  el formulario
  //y el handleDubmit permite la gestion del envio de datos
  const onSubmit = (data) => {
    console.log(data); //Almacena la información recibida
  };
  return (
    <div>
      <h2>formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input {...register("name", { required: true, maxLength: 10 })} />

          {errors.name?.type === "maxLength" && (
            <p> El nombre debe ser menor a 10 caracteres</p>
          )}
          {errors.name?.type === "required" && <p> El campo es requerido</p>}
        </div>

        <div>
          <label>Telefóno</label>
          <input
            {...register("phoneNumber", {
              required: true,
            })}
          />
        </div>

        <div>
          <label>Identificación</label>
          <input {...register("identification", { required: true })} />
        </div>

        <div>
          <label>Tipo de Identificación</label>
          <select
            {...register("typeOfIdentification", {
              required: true,
            })}
          >
            <option value="CE">Cédula de extranjería</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="TI">Tarjeta de identidad</option>
          </select>
        </div>

        <div>
          <label>Ciudad</label>
          <input {...register("city", { required: true })} />
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("Email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+.[^\s@]+$/i,
            })}
          />

          {errors.Email?.type === "pattern" && (
            <p> Por favor ingrese un Email valido</p>
          )}
        </div>

        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default Selection;
