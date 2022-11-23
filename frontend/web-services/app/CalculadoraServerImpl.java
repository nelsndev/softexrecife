package app;

import javax.jws.WebService;
import javax.ejb.Singleton;

@WebService(endpointInterface = "app.CalculadoraServer")
@Singleton()
public class CalculadoraServerImpl implements CalculadoraServer {

  @Override
  public double soma(double x, double y) {
    return  x + y;
  }

  @Override
  public double subtrai(double x, double y) {
    return x - y;
  }

  @Override
  public double multiplica(double x, double y) {
    return x * y;
  }

  @Override
  public double divide(double x, double y) {
    if (y == 0.0) return -1;
    return x / y;
  }
}
