package kh.spring.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.StompWebSocketEndpointRegistration;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration // 설정을 위한 어노테이션 
@EnableWebSocketMessageBroker // 웹소켓 통신에서 중개역할
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer{
    
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) { // 엔드포인트와 무관. 중개자 역할
        registry.setApplicationDestinationPrefixes("/app"); // app을 붙여서 메세지 전송
        registry.enableSimpleBroker("/topic"); // 클라이언트가 받을  url. 클라이언트가 이걸 구독하고 있으면 서버에서 메세지를 받을 수  있음
    }
    
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) { // 엔드포인트는 연결정보 수집시 사용
        StompWebSocketEndpointRegistration ser = registry.addEndpoint("/wechat"); // 클라이언트가 접속할 url
        // ser : session정보 공유할 때 쓰임
        ser.setAllowedOrigins("*"); // 모든 크로스 오리진 이슈를 꺼버림
        // ser.addInterceptors(new HttpSessionHandshakeInterceptor()); // 클라이언트 연결이 들어오는 순간 패킷 가로챔
        ser.withSockJS();
    }
}
