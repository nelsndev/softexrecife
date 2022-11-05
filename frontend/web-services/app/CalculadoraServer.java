package app;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface CalculadoraServer {
  
  @WebMethod double soma(double x, double y);
  
  @WebMethod double subtrai(double x, double y);
  
  @WebMethod double multiplica(double x, double y);
  
  @WebMethod double divide(double x, double y);
}
